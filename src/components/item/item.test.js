import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
  render(<Router>
             <Item data={{
             place: "Vampula",
             player: "Jaska",
             count: "18",
             result: 0,
             playdate: "2022-08-08"
         }}/>
         </Router>);
  const place = screen.getByText(/Vampula/i);
  expect(place).toBeInTheDocument();
  const count = screen.getByText(/18/i);
  expect(count).toBeInTheDocument();
});