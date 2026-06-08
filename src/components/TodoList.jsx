import TodoItem from '@/components/TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className="space-y-[10px] mt-[20px]">
      {todos.map((todo) => (
        // 컴포넌트에 key속성 추가
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
