export interface TaskProps {
  id: string;
  title: string;
  state: boolean;
}

function Task({ id, title, state }: TaskProps) {
  return (
    <div key={id}>
      <label htmlFor={`title${id}`} aria-label={title}>
        <input id={`title${id}`} type="text" value={title} readOnly={true} />
      </label>
    </div>
  );
}
export default Task;
