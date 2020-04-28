
const obj = {
    num:{
    first: 12,
    second: 4,
    },
    min:(prop) => {
        const {
            first,
            second
        } = prop
        return first/second;
    },
    bool: true,
    what:null,
    when:undefined,
    Say:"MEW",
}

const { num ,min } = obj;
const {...props} = obj;


console.log(min(num));
console.log(props);