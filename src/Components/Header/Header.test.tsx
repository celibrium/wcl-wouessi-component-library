import { render, screen } from '@testing-library/react';
import Header from './Header';
import styles from './Header.module.scss';


describe('Header Component', () => {
  test('renders H1 tag when level is 1', () => {
    render(<Header level={1}>Primary Header</Header>);
    const header = screen.getByText(/Primary Header/i);
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('H1');
    expect(header).toHaveClass(styles.h1); 
  });
  test('renders H2 tag when level is 2', () => {
    render(<Header level={2}>Secondary Header</Header>);
    const header = screen.getByText(/Secondary Header/i);
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('H2');
    expect(header).toHaveClass(styles.h2); 
  });
  test('renders p tag with H7 class when level is 7', () => {
    render(<Header level={7}>Seventh Header</Header>);
    const header = screen.getByText(/Seventh Header/i);
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('P');
    expect(header).toHaveClass(styles.h7); 
  });
  
});
