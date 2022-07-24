import { render, screen } from  '@testing-library/react';

import Login from  './pages/Login';

test('renders learn react link', () => {

 render(<Login  />);

 const login = screen.getByText(/Login/i);

 expect(login).toBeInTheDocument();

});
