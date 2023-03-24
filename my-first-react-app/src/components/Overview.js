export function Overview(props) {
  const { tasks } = props;
  function PlayButton({ movieName }) {
    return <button onClick={() => props.del(movieName)}>Delete</button>;
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <>
            <li key={task.id}>{task.text}</li>
            <PlayButton movieName={task.id} />
          </>
        );
      })}
    </ul>
  );
}
