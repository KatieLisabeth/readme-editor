import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import { useMarkdownContext } from 'config/Context';
import { useState } from 'react';
import templates from 'utils/templates';
import MarkdownSection from './MarkdownSection';

const SearchTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredElements, setFilteredElements] = useState<
    { sectionTitle: string; element: IElement }[]
  >([]);
  const { setMarkdownText, setSavedItems, savedItems } = useMarkdownContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredElements([]);
      return;
    }

    // Filter elements to match those starting with the search term
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

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1 }}
          placeholder="Search for an element"
          inputProps={{ 'aria-label': 'search for an element' }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </Paper>

      <div style={{ listStyleType: 'none', padding: 0 }}>
        {filteredElements.length > 0 ? (
          <MarkdownSection
            section={{
              id: 'search-results',
              title: 'Search Results',
              elements: filteredElements.map((item) => item.element),
            }}
            onSelectElement={(syntax) => handleSelect(syntax)}
          />
        ) : (
          <p>No elements found</p>
        )}
      </div>
    </div>
  );
};

export default SearchTemplates;
