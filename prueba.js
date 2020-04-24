<script>
    //EJEMPLO 1
    for(var i = 1; i <= 100; i++){
        switch (true) {
            case i % 5 == 0 && i % 3 == 0:
                console.log('MUSICAL');
            break;
            case i % 5 == 0:
                console.log('TI');
            break;
            case i % 3 == 0:
                console.log('MUSIC');
            break;
            default:
                console.log(i);
            break;
        }
    }

    //EJEMPLO 2
    for(var i = 1; i <= 100; i++){
        var str = i;
        if(i % 5 == 0 || i % 3 == 0){
            str = ((i % 5 == 0 && i % 3 == 0) && 'MUSICAL' || i % 5 == 0 && 'TI' || i % 3 == 0 && 'MUSIC')
        }  
        console.log(str);
    }
</script>