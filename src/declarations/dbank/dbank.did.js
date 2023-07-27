export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'topUp' : IDL.Func([IDL.Nat], [], ['oneway']),
    'withdrawAmount' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
