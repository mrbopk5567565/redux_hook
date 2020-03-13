import useState from '../../../images/useState.png';
import useState2 from '../../../images/useState2.png';
import useEffect1 from '../../../images/useEffect1.png';
import useEffect4 from '../../../images/useEffect4.png';
import useEffect5 from '../../../images/useEffect5.png';
import useMemo from '../../../images/useMemo.png';
import useReducer from '../../../images/useReducer.png';
import useCallback from '../../../images/useCallback.png';
import redux1 from '../../../images/redux1.png';
import redux2 from '../../../images/redux2.png';
import redux3 from '../../../images/redux3.png';
import saga1 from '../../../images/saga1.png';
import saga2 from '../../../images/saga2.png';

export default [
  {
      title: "React Hook",
      content: "Hook ?",
      hook: [
        {
          title: "Basic Hooks = [useState, useEffect]",
        },
        {
          title: "Additional Hooks = [useReducer, useMemo, useCallback, ...]"
        },
      ] 
  },
  {
      title: "Basic Hooks",
      content: "Basic Hooks",
      useState: [
        {
          name: "useState",
          img: `${useState}`,
          img2: `${useState2}`,
        },
        {
          name: "useEffect",
          img: `${useEffect1}`,
          img2: `${useEffect4}`,
          img3: `${useEffect5}`,
        }
      ]
  },
  {
      title: "Additional Hooks",
      content: "Additional Hooks",
      useState: [
        {
          name: "useReducer",
          img: `${useReducer}`,
        },
        {
          name: "useMemo",
          img: `${useMemo}`,
        },
        {
          name: "useCallback",
          img: `${useCallback}`,
        }
      ]
  },
  {
    title: "Redux",
    content: "Redux ?",
    redux: [
      {
        name: "Ví dụ ứng dụng sử dụng Reactjs để cập nhật state cho d4, c3",
        img: `${redux1}`,
      },
      {
        name: "Sử dụng Redux",
        img: `${redux2}`,
      },
      {
        name: "Vòng đời Redux",
        img: `${redux3}`,
      }
    ]
  },
  {
    title: "Redux-Saga",
    content: "Redux Saga ?",
    redux: [
      {
        name: "Redux-Saga giúp quản lý những side effect trong ứng dụng redux trở nên đơn giản hơn",
        img: `${saga1}`,
      },
      {
        name: "Vòng đời Redux Saga",
        img: `${saga2}`,
      },
    ]
  }
]