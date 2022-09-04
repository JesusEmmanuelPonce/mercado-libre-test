export const getCondition = (condition: string) => {
    switch (condition) {
        case "new":
            return "Nuevo";
    
        default: 
            return condition;
    }
};
