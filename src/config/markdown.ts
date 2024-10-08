const markdown: IConfig = {
  route: 'markdown',
  sections: [
    {
      id: 'basic-elements',
      title: 'Basic Elements',
      element: [
        { id: '1', element: 'Heading H1', syntax: '# H1' },
        { id: '2', element: 'Heading H2', syntax: '## H2' },
        { id: '3', element: 'Heading H3', syntax: '### H3' },
        { id: '4', element: 'Bold', syntax: '**bold text**' },
        { id: '5', element: 'Italic', syntax: '*italicized text*' },
        { id: '6', element: 'Blockquote', syntax: '> blockquote' },
        { id: '9', element: 'Code', syntax: '`code`' },
        { id: '10', element: 'Horizontal Rule', syntax: '---' },
        {
          id: '11',
          element: 'Link',
          syntax: '[title](https://www.example.com)',
        },
        { id: '12', element: 'Image', syntax: '![alt text](image.jpg)' },
      ],
    },
    {
      id: 'grouped-elements',
      title: 'Grouped Elements',
      element: [
        {
          id: '7',
          element: 'Ordered List',
          syntax: '1. First item\n2. Second item\n3. Third item',
        },
        {
          id: '8',
          element: 'Unordered List',
          syntax: '- First item\n- Second item\n- Third item',
        },
        {
          id: '13',
          element: 'Table',
          syntax:
            '| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |',
        },
        {
          id: '14',
          element: 'Fenced Code Block',
          syntax:
            '```\n{\n  "firstName": "John",\n  "lastName": "Smith",\n  "age": 25\n}\n```',
        },
        {
          id: '15',
          element: 'Footnote',
          syntax:
            "Here's a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.",
        },
        {
          id: '16',
          element: 'Heading ID',
          syntax: '### My Great Heading {#custom-id}',
        },
        { id: '17', element: 'Definition List', syntax: 'term\n: definition' },
        {
          id: '18',
          element: 'Strikethrough',
          syntax: '~~The world is flat.~~',
        },
        {
          id: '19',
          element: 'Task List',
          syntax:
            '- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media',
        },
        { id: '20', element: 'Emoji', syntax: 'That is so funny! :joy:' },
        {
          id: '21',
          element: 'Highlight',
          syntax: 'I need to highlight these ==very important words==.',
        },
        { id: '22', element: 'Subscript', syntax: 'H~2~O' },
        { id: '23', element: 'Superscript', syntax: 'X^2^' },
        {
          id: '24',
          element: 'Inline HTML',
          syntax: '<strong>bold text</strong>',
        },
        {
          id: '25',
          element: 'Tables with Alignment',
          syntax:
            '| Syntax | Description |\n|:-------|:------------|\n| Left-aligned | Text |\n| Center-aligned | Text |',
        },
        {
          id: '26',
          element: 'Link Reference Definitions',
          syntax: '[Link text][ref]\n\n[ref]: https://example.com',
        },
        {
          id: '27',
          element: 'Automatic Links',
          syntax: '<https://www.example.com>',
        },
        { id: '28', element: 'HTML Entity Encoding', syntax: '&copy;' },
        {
          id: '29',
          element: 'Keyboard Keys',
          syntax: '<kbd>Ctrl</kbd> + <kbd>C</kbd>',
        },
        {
          id: '30',
          element: 'Mathematics (MathJax)',
          syntax: '$$ E = mc^2 $$',
        },
        {
          id: '31',
          element: 'Custom Containers (Callouts)',
          syntax: '::: info\nThis is an info block.\n:::',
        },
      ],
    },
    {
      id: 'custom-elements',
      title: 'User-Specific Elements (README, Portfolio)',
      element: [
        {
          id: '32',
          element: 'README Template',
          syntax: "# My Project\n\nThis is my project's README file.",
        },
        {
          id: '33',
          element: 'Portfolio Introduction',
          syntax:
            '# Welcome to My Portfolio\n\nThis is my portfolio introduction.',
        },
      ],
    },
  ],
};

export default markdown;
