import { Button } from './ui/Button';

export const TodoFilter: React.FC = () => {
    return (
      <div>
        <Button
                text='all'
            />
            <Button
                text='active'
            />
            <Button
                text='complete'
            />
      </div>
    );
  };
  