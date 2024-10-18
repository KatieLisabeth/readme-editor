const markdown: IConfig = {
  route: 'markdown',
  sections: [
    {
      id: 'basic-elements',
      title: 'Basic Elements',
      elements: [
        { id: 'be-1', element: 'Heading H1', syntax: '# H1' },
        { id: 'be-2', element: 'Heading H2', syntax: '## H2' },
        { id: 'be-3', element: 'Heading H3', syntax: '### H3' },
        { id: 'be-4', element: 'Bold', syntax: '**bold text**' },
        { id: 'be-5', element: 'Italic', syntax: '*italicized text*' },
        { id: 'be-6', element: 'Blockquote', syntax: '> blockquote' },
        { id: 'be-7', element: 'Code', syntax: '`code`' },
        { id: 'be-8', element: 'Horizontal Rule', syntax: '---' },
        { id: 'be-9', element: 'Strikethrough', syntax: '~~strikethrough~~' },
        { id: 'be-10', element: 'Inline Code', syntax: '`inline code`' },
        {
          id: 'be-11',
          element: 'Link',
          syntax: '[title](https://www.example.com)',
        },
        { id: 'be-12', element: 'Image', syntax: '![alt text](image.jpg)' },
        {
          id: 'be-13',
          element: 'Unordered List',
          syntax: '- First item\n- Second item\n- Third item',
        },
        {
          id: 'be-14',
          element: 'Ordered List',
          syntax: '1. First item\n2. Second item\n3. Third item',
        },
        {
          id: 'be-15',
          element: 'Task List',
          syntax: '- [x] Completed task\n- [ ] Incomplete task',
        },
        {
          id: 'be-16',
          element: 'Emoji',
          syntax:
            ':smile: \n find more by clicking on this link https://gist.github.com/rxaviers/7360908',
        },
        { id: 'be-17', element: 'Subscript', syntax: 'H~2~O' },
        { id: 'be-18', element: 'Superscript', syntax: 'X^2^' },
        {
          id: 'be-19',
          element: 'Highlight',
          syntax: 'I need to highlight these ==very important words==.',
        },
        { id: 'be-20', element: 'HTML Entity Encoding', syntax: '&copy;' },
        {
          id: 'be-21',
          element: 'Mathematics (MathJax)',
          syntax: '$$ E = mc^2 $$',
        },
        {
          id: 'be-22',
          element: 'Keyboard Keys',
          syntax: '<kbd>Ctrl</kbd> + <kbd>C</kbd>',
        },
        {
          id: 'be-23',
          element: 'Custom Containers (Callouts)',
          syntax: '::: info\nThis is an info block.\n:::',
        },
        {
          id: 'be-24',
          element: 'Inline HTML',
          syntax: '<strong>bold text</strong>',
        },
      ],
    },
    {
      id: 'grouped-elements',
      title: 'Grouped Elements',
      elements: [
        {
          id: 'ge-1',
          element: 'Portfolio Introduction',
          syntax:
            '# Welcome to My Portfolio\n\nThis is my portfolio introduction.',
        },
        {
          id: 'ge-2',
          element: 'README Template',
          syntax: "# My Project\n\nThis is my project's README file.",
        },
        {
          id: 'ge-3',
          element: 'Fenced Code Block',
          syntax:
            '## Object code \n```\n{\n  "firstName": "John",\n  "lastName": "Dou",\n  "age": 25\n}\n```',
        },
        {
          id: 'ge-4',
          element: 'Definition List',
          syntax: 'term\n: definition',
        },
        {
          id: 'ge-5',
          element: 'Table',
          syntax:
            '## Table\n | Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |',
        },
        {
          id: 'ge-6',
          element: 'Task List',
          syntax:
            '## Tasks\n - [x] Write the press release\n - [ ] Update the website\n - [ ] Contact the media',
        },
        {
          id: 'ge-7',
          element: 'Heading ID',
          syntax: '### My Great Heading {#custom-id}',
        },
        {
          id: 'ge-8',
          element: 'Tables with Alignment',
          syntax:
            '### Tables with Alignment\n | Syntax | Description |\n|:-------|:------------|\n| Left-aligned | Text |\n| Center-aligned | Text |',
        },
        {
          id: 'ge-10',
          element: 'Link Reference Definitions',
          syntax: '[Link text][ref]\n\n[ref]: https://example.com',
        },
        {
          id: 'ge-11',
          element: 'Automatic Links',
          syntax: '<https://www.example.com>',
        },
        {
          id: 'ge-12',
          element: 'Color Table',
          syntax:
            '### Color Table\n | Color             | Hex                                                                |\n| ----------------- | ------------------------------------------------------------------ |\n| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |\n| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |\n| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |\n| Example Color | ![#f300ba](https://via.placeholder.com/10/f300ba?text=+) #f300ba |',
        },
        {
          id: 'ge-13',
          element: 'Deployment',
          syntax:
            '### Deployment\n To deploy this project, run:\n```bash\nnpm run deploy\n```',
        },
        {
          id: 'ge-14',
          element: 'API Reference',
          syntax:
            '### Get all items\n```http\nGET /api/items\n```\n| Parameter | Type     | Description                |\n| :-------- | :------- | :------------------------- |\n| `api_key` | `string` | **Required**. Your API key |\n\n### Get item\n```http\nGET /api/items/${id}\n```\n| Parameter | Type     | Description                       |\n| :-------- | :------- | :-------------------------------- |\n| `id`      | `string` | **Required**. Id of item to fetch |',
        },
        {
          id: 'ge-15',
          element: 'Authors',
          syntax:
            '### Authors\n - [@katielisabeth](https://www.github.com/katielisabeth)',
        },
        {
          id: 'ge-16',
          element: 'Contributing',
          syntax:
            "Contributions are always welcome!\n\nSee `contributing.md` for ways to get started.\n\nPlease adhere to this project's `code of conduct`.",
        },
        {
          id: 'ge-17',
          element: 'Usage/Examples',
          syntax:
            "### Usage/Examples\n ```javascript\nimport Component from 'my-project'\n\nfunction App() {\n  return <Component />\n}\n```",
        },
        {
          id: 'ge-18',
          element: 'Run Locally',
          syntax:
            '### Run Locally\n Clone the project\n```bash\ngit clone https://link-to-project\n```\nGo to the project directory\n```bash\ncd my-project\n```\nInstall dependencies\n```bash\nnpm install\n```\nStart the server\n```bash\nnpm run start\n```',
        },
        {
          id: 'ge-19',
          element: 'Skills',
          syntax:
            '###  My skills\n <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="30" height="30" />\n\n <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="30" height="30" />',
        },
        {
          id: 'ge-20',
          element: 'Social',
          syntax:
            '###  Contact me\n <a href="https://github.com/yourusername" target="_blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" width="30" height="30" /><a>\n <a href="https://linkedin.com/yourusername" target="_blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="LinkedIn" width="30" height="30" /></a>',
        },
        {
          id: 'ge-21',
          element: 'Accordion',
          syntax:
            '### Accordion\n <details><summary>Accordion_name</summary><p>Accordion_content</p></details>',
        },
        {
          id: 'ge-9',
          element: 'Footnote',
          syntax:
            "Here's a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.",
        },
      ],
    },
    {
      id: 'skills',
      title: 'Developer skills',
      elements: [
        {
          id: 'ff-1',
          element: 'Vue.js',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="Vue.js" width="30" height="30" />',
        },
        {
          id: 'ff-2',
          element: 'React',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="30" height="30" />',
        },
        {
          id: 'ff-3',
          element: 'Angular',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" alt="Angular" width="30" height="30" />',
        },
        {
          id: 'ff-4',
          element: 'Svelte',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original-wordmark.svg" alt="Svelte" width="30" height="30" />',
        },
        {
          id: 'ff-5',
          element: 'Next.js',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width="30" height="30" />',
        },
        {
          id: 'ff-6',
          element: 'Bootstrap',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" width="30" height="30" />',
        },
        {
          id: 'ff-7',
          element: 'Tailwind CSS',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="30" height="30" />',
        },
        {
          id: 'ff-8',
          element: 'HTML5',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="30" height="30" />',
        },
        {
          id: 'ff-9',
          element: 'CSS3',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="30" height="30" />',
        },
        {
          id: 'ff-10',
          element: 'JavaScript',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="30" height="30" />',
        },
        {
          id: 'ff-11',
          element: 'TypeScript',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="30" height="30" />',
        },
        {
          id: 'bl-1',
          element: 'Node.js',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="30" height="30" />',
        },
        {
          id: 'bl-2',
          element: 'Django',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="Django" width="30" height="30" />',
        },
        {
          id: 'bl-3',
          element: 'Flask',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original-wordmark.svg" alt="Flask" width="30" height="30" />',
        },
        {
          id: 'bl-4',
          element: 'Spring Boot',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg" alt="Spring Boot" width="30" height="30" />',
        },
        {
          id: 'bl-5',
          element: 'Ruby on Rails',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="Ruby on Rails" width="30" height="30" />',
        },
        {
          id: 'bl-6',
          element: 'PHP',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" width="30" height="30" />',
        },
        {
          id: 'bl-7',
          element: 'Go',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="Go" width="30" height="30" />',
        },
        {
          id: 'bl-8',
          element: 'ASP.NET Core',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="ASP.NET Core" width="30" height="30" />',
        },
        {
          id: 'bl-9',
          element: 'Rust',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" alt="Rust" width="30" height="30" />',
        },
        {
          id: 'db-1',
          element: 'MySQL',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="30" height="30" />',
        },
        {
          id: 'db-2',
          element: 'PostgreSQL',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width="30" height="30" />',
        },
        {
          id: 'db-3',
          element: 'MongoDB',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="30" height="30" />',
        },
        {
          id: 'db-4',
          element: 'SQLite',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original-wordmark.svg" alt="SQLite" width="30" height="30" />',
        },
        {
          id: 'db-5',
          element: 'Redis',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="Redis" width="30" height="30" />',
        },
        {
          id: 'db-6',
          element: 'Oracle',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="Oracle" width="30" height="30" />',
        },
        {
          id: 'db-7',
          element: 'Cassandra',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cassandra/cassandra-original.svg" alt="Cassandra" width="30" height="30" />',
        },
        {
          id: 'ds-1',
          element: 'AWS',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="30" height="30" />',
        },
        {
          id: 'ds-2',
          element: 'Google Cloud Platform',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original-wordmark.svg" alt="Google Cloud Platform" width="30" height="30" />',
        },
        {
          id: 'ds-3',
          element: 'Azure',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg" alt="Azure" width="30" height="30" />',
        },
        {
          id: 'ds-4',
          element: 'Docker',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width="30" height="30" />',
        },
        {
          id: 'ds-5',
          element: 'Kubernetes',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg" alt="Kubernetes" width="30" height="30" />',
        },
        {
          id: 'ds-6',
          element: 'Heroku',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg" alt="Heroku" width="30" height="30" />',
        },
        {
          id: 'ds-7',
          element: 'Netlify',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original-wordmark.svg" alt="Netlify" width="30" height="30" />',
        },
        {
          id: 'ds-8',
          element: 'Vercel',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg" alt="Vercel" width="30" height="30" />',
        },
        {
          id: 'ds-9',
          element: 'Nginx',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="Nginx" width="30" height="30" />',
        },
        {
          id: 'ds-10',
          element: 'Git',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" alt="Git" width="30" height="30" />',
        },
        {
          id: 'ds-11',
          element: 'GitHub',
          syntax:
            '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg" alt="GitHub" width="30" height="30" />',
        },
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media',
      elements: [
        {
          id: 'sm-1',
          element: 'GitHub',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" width="30" height="30" />
  <a href="https://github.com/yourusername" target="_blank">https://github.com/yourusername</a>
</div>`,
        },
        {
          id: 'sm-2',
          element: 'LinkedIn',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="LinkedIn" width="30" height="30" />
  <a href="https://linkedin.com/in/yourusername" target="_blank">https://linkedin.com/in/yourusername</a>
</div>`,
        },
        {
          id: 'sm-3',
          element: 'Twitter',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Twitter" width="30" height="30" />
  <a href="https://twitter.com/yourusername" target="_blank">https://twitter.com/yourusername</a>
</div>`,
        },
        {
          id: 'sm-4',
          element: 'Stack Overflow',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg" alt="Stack Overflow" width="30" height="30" />
  <a href="https://stackoverflow.com/users/youruserid" target="_blank">https://stackoverflow.com/users/youruserid</a>
</div>`,
        },
        {
          id: 'sm-5',
          element: 'Dev.to',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="Dev.to" width="30" height="30" />
  <a href="https://dev.to/yourusername" target="_blank">https://dev.to/yourusername</a>
</div>`,
        },
        {
          id: 'sm-6',
          element: 'CodePen',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" alt="CodePen" width="30" height="30" />
  <a href="https://codepen.io/yourusername" target="_blank">https://codepen.io/yourusername</a>
</div>`,
        },
        {
          id: 'sm-7',
          element: 'GitLab',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gitlab.svg" alt="GitLab" width="30" height="30" />
  <a href="https://gitlab.com/yourusername" target="_blank">https://gitlab.com/yourusername</a>
</div>`,
        },
        {
          id: 'sm-8',
          element: 'Bitbucket',
          syntax: `
<div>
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/bitbucket.svg" alt="Bitbucket" width="30" height="30" />
  <a href="https://bitbucket.org/yourusername" target="_blank">https://bitbucket.org/yourusername</a>
</div>`,
        },
      ],
    },
  ],
};

export default markdown;
