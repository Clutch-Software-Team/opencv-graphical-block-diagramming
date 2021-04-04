const setInputValue = (input, value) => {
    const previousValue = input.value;

    // eslint-disable-next-line no-param-reassign
    input.value = value;

    const tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(previousValue);
    }

    input.dispatchEvent(new Event('change', { bubbles: true }));
}

export default setInputValue;