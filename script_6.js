
console.log("Traduire la série d'ARN CCGUCGUUGCGCUACAGC en protéines");
let ARN1 = "CCG UCG UUG CGC UAC AGC";

    ARN1=ARN1.replace("CCG", "Proline ");
    ARN1=ARN1.replace("UCG", "Sérine ");
    ARN1=ARN1.replace("UUG", "Leucine ");
    ARN1=ARN1.replace("CGC", "Arginine ");
    ARN1=ARN1.replace("UAC", "Tyrosine ");
    ARN1=ARN1.replace("AGC", "Sérine ");
  
    console.log(`Cette série d'ARN en protéine se lit : ${ARN1}`)

console.log("Traduire la série d'ARN CCUCGCCGGUACUUCUCG en protéines");
let ARN2 = "CCU CGC CGG UAC UUC UCG";
    
    ARN2=ARN2.replace("CCU", "Proline ");
    ARN2=ARN2.replace("CGC", "Arginine ");
    ARN2=ARN2.replace("CGG", "Arginine ");
    ARN2=ARN2.replace("UAC", "Tyrosine ");
    ARN2=ARN2.replace("UUC", "Phénylalanine ");
    ARN2=ARN2.replace("UCG", "Sérine ");
    
    console.log(`Cette série d'ARN en protéine se lit : ${ARN2}`)


    