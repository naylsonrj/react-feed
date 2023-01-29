import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/naylsonrj.png',
      name: 'Naylson Costa',
      role: 'React student '
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Projeto realizado para estudo do REACT com vite' },
      { type: 'link', content: 'linkedin.com/in/naylsoncosta/' },
    ],
    publishedAt: new Date('2023-01-29 18:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/github.png',
      name: 'Github',
      role: 'Bot Github'
    },
    content: [
      { type: 'paragraph', content: 'Congratulations!! 👋' },
      { type: 'paragraph', content: "You've been learning a lot about REACT, keep on studying, don't give up! 🚀" },
      { type: 'link', content: 'https://github.com/naylsonrj' },
    ],
    publishedAt: new Date('2023-01-29 19:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
