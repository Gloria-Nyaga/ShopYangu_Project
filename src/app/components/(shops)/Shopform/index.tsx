import { useState } from 'react';

interface ShopFormProps {
  initialData?: { id?: number; name: string; location: string };
  onSubmit: (data: { id?: number; name: string; location: string }) => void;
}

const ShopForm: React.FC<ShopFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [location, setLocation] = useState(initialData?.location || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id, name, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Shop Name" required />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShopForm;