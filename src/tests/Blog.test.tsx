import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from '../components/Blog';

// Mock framer-motion to avoid issues with Jest
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Blog Component', () => {
//   it('renders the blog title', () => {
//     render(<Blog />);
//     expect(screen.getByText('Our Blog')).toBeInTheDocument();
//   });

  it('initially renders 6 blog posts', () => {
    render(<Blog />);
    const blogPosts = screen.getAllByText(/Blog Post \d+/);
    expect(blogPosts).toHaveLength(6);
  });

  it('renders "Load More" button when there are more posts to load', () => {
    render(<Blog />);
    expect(screen.getByText('Load More')).toBeInTheDocument();
  });

  it('loads more posts when "Load More" button is clicked', async () => {
    render(<Blog />);
    const loadMoreButton = screen.getByText('Load More');
    fireEvent.click(loadMoreButton);

    await waitFor(() => {
      const blogPosts = screen.getAllByText(/Blog Post \d+/);
      expect(blogPosts).toHaveLength(12);
    });
  });

  it('hides "Load More" button when all posts are loaded', async () => {
    render(<Blog />);
    const loadMoreButton = screen.getByText('Load More');

    // Click "Load More" button until all posts are loaded
    for (let i = 0; i < 3; i++) {
      fireEvent.click(loadMoreButton);
    }

    await waitFor(() => {
      expect(screen.queryByText('Load More')).not.toBeInTheDocument();
    });
  });

  it('renders correct date and read time for each post', () => {
    render(<Blog />);
    const dates = screen.getAllByText(/\w+ \d{1,2}, 2023/);
    const readTimes = screen.getAllByText(/\d+ min read/);

    expect(dates).toHaveLength(6);
    expect(readTimes).toHaveLength(6);
  });

  it('renders "Read more" button for each post', () => {
    render(<Blog />);
    const readMoreButtons = screen.getAllByText('Read more');
    expect(readMoreButtons).toHaveLength(6);
  });
});
