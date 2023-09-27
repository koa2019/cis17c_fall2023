/*Dr. Mark E. Lehr
  March 5th, 2020
  Purpose:  Curve fit of Data Structure empirical timing and/or
            operational analysis
*/
#include<iostream>
#include<iomanip>
using namespace std;

//User Libraries 
#include "mArray.h"

//Global Constants - Physics, Math, Conversions, Dimensions for
//function prototypes only!

//Function Prototypes

//Execution begins here
int main(){
    //Declare the Row and Empirical Data files
    char fn_r[]="r.dat";//r file name -> Set point X functional values
    mArray r(fn_r);     //Independent variable, form of the equation
    char fn_f[]="f.dat";//f file name -> Measured data Y
    mArray f(fn_f);     //Dependent variable, from empirical data run
    
    //r.getThis(f);
    
    int row=r.getRows(), col=r.getCols();
    double sx=r.getSumX(),
           sy=r.getSumY(), 
           sxy=r.getSumX()*r.getSumY(),
           sye=f.getSumYE();
    cout<<row<<" "<<col<<endl;
    
//    cout<<fixed<<setprecision(2)
//        <<"sumX:  "<<sx
//        <<"\nsumY:  "<<sy
//        <<"\nsumX^2: "<<sx*sx     
//        <<"\nsumXY: "<<sxy   
//        <<"\nsumYE: "<<sye        
//        <<endl;
    //double m = (sy*sx-(row*sxy));//-2167583.21
    ///((sx*sx)-(row*(sx*sx)) );
    //cout<<"slope: "<<m<<endl;
    double b=(sy-.555555556*sx)/row;  
    cout<<"b: "<<b<<endl;
   
//    float num=0;
//    //cout << r.getData(0,1) <<" "; 
//    
//   for(int r=0;r<row;r++){
//        for(int c=0;c<col;c++){    
//            num = r.getData(r,c);
//            cout << num <<" ";    
//        } cout<<endl;
//    } 
    
    //Make the Sum of Squares Calculation c=(rt*r)^-1
    mArray rt(false,r); //Transpose of independent variable
    mArray c=mArray::invMat(rt*r)*rt*f;
    
    //Output the results
    char fn_c[]="c.dat";//c file name -> Functional Coefficients solutions
    c.mPrint(fn_c);     //Where curve fit coefficients are printed
    
    return 0;
}