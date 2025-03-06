import React from 'react';
import type { Preview } from '@storybook/react';
import "../src/App.css"; // Ensure global styles are loaded

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => 
      React.createElement(
        React.Fragment,
        {},
        React.createElement("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        }),
        React.createElement("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        }),
        React.createElement("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",
          rel: "stylesheet",
        }),
        React.createElement(Story)
      ),
  ],
};

export default preview;