import { render, screen } from '@testing-library/react';
import Icon from './Icon';
import '@testing-library/jest-dom'; 

describe('Icon Component', () => {
  it('should render CaretCircleRight icon with default size and color', () => {
    render(<Icon name="CaretCircleRight" />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
    expect(icon).toHaveAttribute('fill', 'black');
  });

  it('should render CaretCircleRight icon with a custom size', () => {
    render(<Icon name="CaretCircleRight" size={48} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('width', '48');
    expect(icon).toHaveAttribute('height', '48');
  });

  it('should render CaretCircleRight icon with a custom color', () => {
    render(<Icon name="CaretCircleRight" color="red" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('fill', 'red');
  });
});