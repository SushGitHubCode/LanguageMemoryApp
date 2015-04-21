memoryAlphabetApp.factory('varnamala1', function() {
    var set =['A','AA','E','EE'];  
    return new Game(set);
});

memoryAlphabetApp.factory('varnamala2', function() {
    var set = ['U','UU','EI','EEI'];  
    return new Game(set);
});

memoryAlphabetApp.factory('varnamala3', function() {
    var set = ['O','OU','UM','UAH'];
    return new Game(set);
});


memoryAlphabetApp.factory('vyanjan1', function() {
    var set =['Throat-K','Throat-KH','Throat-G','Throat-GH', 'Throat-N',
    		'Tongue-CH','Tongue-CHH','Tongue-J','Tongue-JH','Tongue-N',
    		'Tongue_right_back-T','Tongue_right_back-TTH','Tongue_right_back-D','Tongue_right_back-DH','Tongue_right_back-N',
     		'Touch_tongue_to_teeth-T','Touch_tongue_to_teeth-TTH','Touch_tongue_to_teeth-D','Touch_tongue_to_teeth-DH','Touch_tongue_to_teeth-N',
     		'Lips_Closed-P','Lips_Closed-PH','Lips_Closed-B','Lips_Closed-BH', 'Lips_Closed-M',
     		'Lip_throat_open-Y','Lip_throat_open-R','Lip_throat_open-L','Lip_throat_open-V','Lip_throat_open-SH',
     		'Lip_throat_open-SHH','Lip_throat_open-S', 'Lip_throat_open-H','Compound-GYA','Compound-KSH'  ];  
    set = getRandomArrayElements(set,4);  
    return new Game(set);
});
 