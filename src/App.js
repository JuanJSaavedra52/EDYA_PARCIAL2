import styles from './App.css';
import { Baner } from './components/Baner';
import { GetImagenes } from './components/GetImagenes';
import { ListImage } from './components/ListImage';

export const App = () => {
  return (
    <>
      <Baner />
      <ListImage />
    </>
  );
}