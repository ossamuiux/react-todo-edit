export default function TodoCount({ todos }) {
  // 배열요소의 done값이 true인 요소만으로 새로운 배열생성후 갯수 구하기
  const isDone = todos.filter((todo) => todo.done).length;

  return (
    <div className="mt-[10px] text-[14px] text-gray-600">
      완료: {isDone} / 할 일: {todos.length}
    </div>
  );
}
