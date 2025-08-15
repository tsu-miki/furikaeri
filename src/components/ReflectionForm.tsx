type Props = {
  value: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const ReflectionForm = ({ value, onSubmit, onChange }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="good">良かったこと</label>
      <textarea id="good" name="good" onChange={onChange} value={value} />
      <button type="submit">保存</button>
    </form>
  );
};
