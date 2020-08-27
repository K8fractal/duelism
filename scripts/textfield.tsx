import React from 'react';

interface Props {
  value: string;
  setValue: (newValue: string) => void;
}

const TextField = ({ value, setValue }: Props): JSX.Element => {
  return (
    <>
      <div>
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
