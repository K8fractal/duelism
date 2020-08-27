import React from 'react';

interface Props {
  value: string;
  setValue: (newValue: string) => void;
  label: string;
}

const TextField = ({ value, setValue, label }: Props): JSX.Element => {
  return (
    <>
      <div>
        {label + ': '}
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default TextField;
