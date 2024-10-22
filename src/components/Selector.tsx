import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import templates from 'utils/templates';

const Selector: React.FC<IMarkdownSelector> = ({ value, onChange }) => {
  return (
    <>
      <FormControl
        variant="standard"
        fullWidth
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      >
        <InputLabel id="section-select-label">Make selection</InputLabel>
        <Select
          labelId="section-select-label"
          value={value}
          onChange={onChange}
          label="Select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {templates.sections?.map((section) => (
            <MenuItem key={section.id} value={section.id}>
              {section.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Selector;
