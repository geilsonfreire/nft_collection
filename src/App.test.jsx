import { render, screen } from '@testing-library/react';  // Importa os métodos render e screen
import App from './App'; // Importa o componente App

// Define um caso de teste chamado 'renders learn react link'
test('renders learn react link', () => {
  render(<App />); // Renderiza o componente App
  const linkElement = screen.getByText(/learn react/i); // Busca o elemento que contém o texto 'learn react'
  expect(linkElement).toBeInTheDocument(); // Verifica se o elemento foi renderizado
}); 
