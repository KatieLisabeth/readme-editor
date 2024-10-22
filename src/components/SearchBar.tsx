import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import { useMarkdownContext } from 'config/Context';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import templates from 'utils/templates';
import MarkdownSection from './Section';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredElements, setFilteredElements] = useState<
    { sectionTitle: string; element: IElement }[]
  >([]);
  const location = useLocation();
  const { setMarkdownText, setSavedItems, savedItems } = useMarkdownContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredElements([]);
      return;
    }

    const elementsWithSection = templates.sections.flatMap(
      (section: ISection) =>
        section.elements
          .filter((element: IElement) =>
            element.element.toLowerCase().startsWith(term)
          )
          .map((element) => ({
            sectionTitle: section.title,
            element,
          }))
    );

    setFilteredElements(elementsWithSection);
  };

  const handleSelect = (syntax: string[]) => {
    const combinedSyntax = syntax.join('\n\n');
    const updatedItems = [...savedItems, combinedSyntax];
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n\n'));
  };
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setSearchTerm('');
        setFilteredElements([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const isPlayground = location.pathname === '/playground';

  return (
    <div ref={searchBarRef}>
      {isPlayground ? (
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
          }}
        >
          <IconButton color="primary" sx={{ p: '4px' }} aria-label="directions">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 22, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1 }}
            placeholder="Search for an element"
            inputProps={{ 'aria-label': 'search for an element' }}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Paper>
      ) : null}

      <div style={{ listStyleType: 'none', padding: 0 }}>
        {filteredElements.length > 0 ? (
          <MarkdownSection
            section={{
              id: 'search-results',
              title: 'Search Results',
              elements: filteredElements.map((item) => item.element),
            }}
            onSelectElement={(syntax) => handleSelect(syntax)}
            isSearch={true}
          />
        ) : (
          searchTerm && <p>No elements found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
