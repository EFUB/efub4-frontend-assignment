const initialState = {
    isDark: false,
};

export function reducer(currentState = initialState, action) {
    const newState = { ...currentState };

    switch (action.type) {
        case "ToggleMode":
            newState.isDark = !newState.isDark;

            console.log(newState.isDark);
            break;
    }

    return newState;
}
