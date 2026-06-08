import CheckBox from '@/components/common/CheckBox';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function TodoItem({ todo, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [txt, setTxt] = useState(todo.text);

  function handleDone() {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      }),
    );
  }

  function handleEdit() {
    setIsEdit(!isEdit);

    if (isEdit) {
      setTodos(
        todos.map((t) => {
          if (t.id === todo.id) {
            return {
              ...t,
              text: txt,
            };
          } else {
            return t;
          }
        }),
      );
    }
  }

  function handleDelete() {
    // 배열전체의 id와 전달된 객체의 id가 다른요소로 새로운 배열 생성
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className="flex gap-x-[10px] items-center">
      <CheckBox
        label={todo.text}
        checked={todo.done}
        onChange={handleDone}
        className={`grow ${todo.done ? 'line-through' : ''}`}
      >
        {isEdit && (
          <TextareaAutosize
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            className="border-b border-b-black p-[5px] grow"
          />
        )}
      </CheckBox>
      <button
        type="button"
        className="text-gray-500 border border-[#999] h-[32px] px-[10px] rounded-[4px] shrink-0"
        onClick={handleEdit}
      >
        {isEdit ? '완료' : '수정'}
      </button>
      <button
        type="button"
        className="text-[#b83030] border border-[#b83030] h-[32px] px-[10px] rounded-[4px] shrink-0"
        onClick={handleDelete}
      >
        삭제
      </button>
    </li>
  );
}
