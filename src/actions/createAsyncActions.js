export default function createAsyncActions(prefix, name) {
  return {
    request: `${prefix}${name}_REQUEST`,
    success: `${prefix}${name}_SUCCESS`,
    failure: `${prefix}${name}_FAILURE`
  };
}
