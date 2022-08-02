// const form = document.form[1];
// console.log(form);

// const form1 = document.forms.search;
// console.log(form1);

// const form2 = document.forms['search'];
// console.log(form2);

// const [input, button] = form.elements;
// console.log([input, button]);

// const input1 = form.searchInput;
// console.log(input1); // form is not defined

// const input = form['searchInput'];
// console.log(input); // form is not defined

// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused', false));
// input.addEventListener('blur', () => alert('blurred', false));


// const form = document.forms['search'];
// form.addEventListener ('submit', search, false);

// function search() {
//     alert('Form Submitted');
// }

// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

// function search(event) {
//     alert(`You searched for: ${input.value}`);
//     event.preventDefault();
//     input.value = 'Search Here';
// }

// document.forms.hero.heroName.focus();


// // -------
// const form3 = document.forms['hero'];
// form3.addEventListener('submit', makeHero, false);

// function makeHero() {
//     event.preventDefault(); // prevent the form from being submitted

//     const hero = {}; // create an empty object

//     hero.name = form3.heroName.value; // create a name property based on the input field's value
//     console.log(hero.name);

//     hero.realName = form3.realName.value;
//     console.log(hero.realName);

//     hero.category = form3.category.value;
//     // form3.type[1].checked;
//     console.log(hero.category);

//     hero.age = form3.age.value;
//     console.log(hero.age);

//     form3.city;
//     console.log(form3.city);

//     hero.city = form3.city.value;
//     console.log(hero.city);

//     hero.origin = form3.origin.value;
//     console.log(hero.origin);

//     alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog

    // hero.powers = [];
    // for (let i=0; 1 < form3.powers.length; i++ ){
    //     if (form3.powers[i].checked) {
    //         hero.powers.push(form3.powers[i].value);
    //     }
    //     console.log(form3);
    // }

    // hero.powers = [...form3.powers].filter(box => checked).map(box => box.value);

    // console.log(powers);

    // return hero;

    // console.log(form3.powers);


    // const form = document.getElementsByTagName(form);
    // console.log(form.category);
//     form3.addEventListener('submit', validate, false);

//     function validate(event) {
//         const firstLetter = form3.heroName.value[0];
//         if (firstLetter.toUpperCase() === 'X') {
//             event.preventDefault();
//             alert('Your name is not allowed to start with X!');
//         }
//     }
// }

const label = document.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }

    console.log(error); 
}

console.log('Daniel');