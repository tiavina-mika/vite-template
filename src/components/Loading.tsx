import * as React from 'react'

type Props = {
    show?: boolean;
    wait?: `delay-${number}`;
}
const Loading = ({
  show,
  wait,
}: Props) => {
  return (
    <div
      className={`inline-block animate-spin px-3 transition ${
        show ?? true
          ? `opacity-1 duration-500 ${wait ?? 'delay-300'}`
          : 'duration-500 opacity-0 delay-0'
      }`}
    >
      ⍥
    </div>
  )
}

export default Loading;