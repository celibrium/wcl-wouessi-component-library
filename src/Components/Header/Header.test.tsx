import { render, screen } from '@testing-library/react';
import Header from './Header';
import styles from './Header.module.scss';


describe('Header Component', () => {
  test('renders with primary styling when level is 1', () => {
    render(<Header level={1}>Primary Header</Header>);
    const header = screen.getByText(/Primary Header/i);
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass(styles.primary); // Ensures the primary class is applied
  });

  test('renders without primary styling when level is not 1', () => {
    render(<Header level={2}>Secondary Header</Header>);
    const header = screen.getByText(/Secondary Header/i);
    expect(header).toBeInTheDocument();
    expect(header).not.toHaveClass(styles.primary); // The primary style should not be present
  });
  
});
