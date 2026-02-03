import Tile from './Tile';
import { ATTRIBUTES } from '../data/attributes';

export default function GuessRow({ result }) {
  return (
    <div className="row">
      {ATTRIBUTES.map(attr => (
        <Tile key={attr} status={result[attr]} label={attr} />
      ))}
    </div>
  );
}