const acc = document.querySelectorAll('.accordian');
// first use for each since query selector all not directly add event listener
acc.forEach((a)=>{
    const icon = a.querySelector('.fa-solid')
    const ans = a.querySelector('.answer')
    // console.log(icon);
    
    a.addEventListener('click',()=>{
        // class remove add case so use classList : add contains remove toggle
        // if active then gets removed , otherwise implemented

        // icon.classList.toggle('active') 
        // ans.classList.toggle('active')
        //-------------------------------

        if (icon.classList.contains('active')) {
            icon.classList.remove('active')
            ans.style.maxHeight = null
        } else {
            icon.classList.add('active')
            ans.style.maxHeight = ans.scrollHeight + 'px'
        }

    })
})