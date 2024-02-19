const person = Object.create(
    {},
    {   
        name: {
            value: 'Vlad',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1993,
            enumerable: true,
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                console.log('Set age', value)
            },

        }
    }
)

person.name = 'John'
