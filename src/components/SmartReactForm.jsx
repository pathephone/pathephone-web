/**
 * TODO: enable flow once will be ready
 */

import React from 'react';
import getValue from 'get-value'

type TProps = {
  onChange(e: Event): void
}

export const SmartReactForm = (props: TProps) => {

  const {
    onChange, values, errors, ...restProps
  } = props;

  const formRef = React.useRef<HTMLFormElement>();

  const attachOnChangeListeners = () => {
    const formNode = formRef.current;
    if (formNode) {
      const { elements } = formNode;
      for (let i = 0; i < elements.length; i += 1) {
        const target = elements[i]
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          target.addEventListener('change', onChange);
        }
      }
    }
  }

  const deattachOnChangeListeners = () => {
    const formNode = formRef.current;
    if (formNode) {
      const { elements } = formNode;
      for (let i = 0; i < elements.length; i += 1) {
        const target = elements[i]
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          elements[i].removeEventListener('change', onChange);
        }
      }
    }
  }

  const observerRef = React.useRef<MutationObserver>(
    new MutationObserver(() => {
      deattachOnChangeListeners();
      attachOnChangeListeners();
    })
  );

  const syncValues = () => {
    const formNode = formRef.current;
    if (formNode) {
      const { elements } = formNode;
      for (let i = 0; i < elements.length; i += 1) {
        const target = elements[i];
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          const { type, name } = target;
          if (name) {
            const value = getValue(values, name);
            if (type !== 'file' && value !== undefined) {
              target.value = value;
            }
          }
        }
      }
    }
  }

  const syncErrors = () => {
    const formNode = formRef.current;
    if (formNode) {
      const { elements } = formNode;
      for (let i = 0; i < elements.length; i += 1) {
        const target = elements[i];
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          const { name } = target;
          if (name) {
            const invalid = getValue(errors, name);
            if (invalid) {
              target.setCustomValidity(invalid);
            } else {
              target.setCustomValidity('');
            }
          }
        }
      }
    }
  }

  React.useEffect(() => {
    const { current: observer } = observerRef;
    const { current: form } = formRef;
    if (observer && form) {
      syncValues();
      syncErrors();
      attachOnChangeListeners();
      observer.observe(form, {
        childList: true,
      });
      return () => {
        observer.disconnect();
        deattachOnChangeListeners();
      }
    }
  })

  return (
    <form ref={formRef} {...restProps} />
  )

}