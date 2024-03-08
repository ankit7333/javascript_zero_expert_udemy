
//AND Operator Eg.
{
    const hasDriversLicense = true;
    const hasGoodVision = false;
    console.log(hasDriversLicense && hasGoodVision);
}
//OR Operator Eg.
{
    const hasDriversLicense = true;
    const hasGoodVision = false;
    console.log(hasDriversLicense || hasGoodVision);
}
//NOT Operator Eg.
{
    const hasDriversLicense = true;
    const hasGoodVision = false;
    console.log(!hasDriversLicense);
}
//Example
{
    const hasDriversLicense = true;
    const hasGoodVision = true;
    const isTired = false;
    if(hasDriversLicense && hasGoodVision && !isTired){
        console.log(`Sarah is able to drive!`);
    }else{
        console.log(`Someone else should drive...`);
    }
}