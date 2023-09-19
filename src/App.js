import CommandPalette from './components/CommandPalette';
import { data } from './data/data';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CommandPalette data={data} />
    </div>
  );
}
