export function updateObjectState(setStateFn, field, value) {
  setStateFn((prev) => ({ ...prev, [field]: value }));
}

export function updateArrayObjectState(setStateFn, index, field, value) {
  setStateFn((prev) =>
    // Receive the previous state in prev
    // Interate over the objs in the array. Entry is the current obj
    prev.map((entry, i) =>
      // When at the correct index, copy the current obj with ...entry
      // Update the value and return a new obj
      i === index ? { ...entry, [field]: value } : entry
    )
  );
}
