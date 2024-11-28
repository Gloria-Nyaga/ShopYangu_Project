import { useState } from 'react';

interface ProductFormProps {
  initialData?: { id?: number; name: string; price: number };
  onSubmit: (data: { id?: number; name: string; price: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [price, setPrice] = useState(initialData?.price || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id, name, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;