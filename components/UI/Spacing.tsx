import React from 'react';

interface Props {
  two?: boolean;
  ms?: boolean;
}

const Spacing: React.FC<Props> = ({ two, ms }) => {
  return two ? (
    <span className={`${ms ? 'hidden ms:flex' : 'ms:hidden'}`}>&nbsp; &nbsp;</span>
  ) : (
    <span className={`${ms ? 'hidden ms:flex' : 'ms:hidden'}`}>&nbsp;</span>
  );
};

export default Spacing;
