let grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
        let grades_array = grades.split(", "); //turn the string grades to an array
        grades_array.sort(); // sort the array

        let names = []; // creat an empty array to store names
        let scores = []; // creat an empty array to store scores
        for (let i in grades_array) {
            let name = grades_array[i].split("|")[0];
            let name_capital = name.charAt(0).toUpperCase() + name.slice(1)
            names.push(name_capital);
            let score = grades_array[i].split("|")[1];
            scores.push(parseInt(score));
        }

        let total = 0;
        for (let i in scores) {
            total = total + scores[i];
        }
        let stu = names.length;
        let ave = total/stu;
        let max = Math.max.apply(null, scores);
        let min = Math.min.apply(null, scores);

        let p = "";
        for (let i = 0; i < names.length; i++) {
            p = p + "<b>Name</b>: " + names[i] + "&nbsp;&nbsp;&nbsp;<b>Score</b>: " + scores[i] + "<br>" + "<br>";
        }

        document.getElementById("grade").innerHTML = p;
        document.getElementById("stu").innerHTML = "There are " + stu + " students attended the exam. ";
        document.getElementById("max").innerHTML = "The highest score is " + max;
        document.getElementById("min").innerHTML = "The lowest score is " + min;
        document.getElementById("total").innerHTML ="The average score is " + ave;