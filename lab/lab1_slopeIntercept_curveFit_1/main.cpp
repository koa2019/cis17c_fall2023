/* 
 * File:    main.cpp
 * Author:  Danielle F
 * Created: 09-26-2023 @ 12AM
 * Purpose:  
 */

//System Libraries
#include <bits/stdc++.h> 
#include<iostream>
#include<iomanip>
using namespace std;  //STD Name-space where Library is compiled

//User Libraries

//Global Constants not Variables
//Math/Physics/Science/Conversions/Dimensions

//Function Prototypes
double square(double **,int, int);
double multiply(double **,int,int,int);

//Code Begins Execution Here with function main
int main(int argc, char** argv) {
    //Set random number seed once here
    srand(static_cast<unsigned int>(time(0)));
    //rand()%90+10;//2 digit numbers
    
     //Declare the Row and Empirical Data files
    char fn_r[]="r.dat";//r file name -> Set point X functional values
    //mArray r(fn_r);     //Independent variable, form of the equation
    char fn_f[]="f.dat";//f file name -> Measured data Y
    //mArray f(fn_f);     //Dependent variable, from empirical data run
        
    double sx,sy,sye;
    sx=sy=sye=0;
    
    ifstream in;
    in.open(fn_r);
    double rd,cd;
    in>>rd;//37
    in>>cd;//3  or 1
    int Rows=static_cast<int>(rd);
    int Cols=static_cast<int>(cd);
    double **Data=new double*[Rows];
    for(int r=0;r<Rows;r++){
        Data[r]=new double[Cols];
    }
    for(int r=0;r<Rows;r++){
        for(int c=0;c<Cols;c++){
                in>>Data[r][c];
                cout<<fixed<<setprecision(2);
                //cout<<"["<<r<<","<<c<<"]="<<Data[r][c]<<" ";
                if(cd>0 && c==0){
                    //cout<<"["<<r<<","<<c<<"]="<<Data[r][c];
                    sx+=Data[r][c];
                    //cout<<" sx="<<sx<<" ";
                } else if(cd>0 && c==1){
                    //cout<<"["<<r<<","<<c<<"]="<<Data[r][c]<<" sy=";
                    sy+=Data[r][c];
                    //cout<<" sy="<<sy<<" ";
                } else {//if(cd==1){
                    //cout<<"["<<r<<","<<c<<"]="<<Data[r][c]<<" sye=";
                    sye+=Data[r][c];
                    //cout<<" sye="<<fixed<<setprecision(2)<<sye<<" ";
                }
        }//cout<<endl;
    }//cout<<endl;
    //cout<<"sx="<<sx<<"\nsy="<<fixed<<setprecision(2)<<sy<<"\nsye="<<sye<<" \n\n";
    //cout<<"\neof...\n\n";
    in.close();
    
    double sxsx = square(Data,Rows,0);
    double sxye = multiply(Data,Rows,0,2);
    
    cout<<"sx:  "<<sx<<endl
        <<"sy:  "<<sy<<endl
        <<"sy': "<<sye<<endl
        <<"sx*sx: "<<sxsx<<endl
        <<"sxy':"<<sxye<<endl;
    
    double m = (sye*sx-Rows*sxye)/((sxsx)-Rows*(sxsx));
    cout<<endl<<"slope: "<<m<<endl;
    double b=(sy-.555555556*sx)/Rows;  
    cout<<"b: "<<b<<endl;
    
    return 0;
}

/**********  Function Definitions  **************/
double multiply(double **Data,int Rows,int left, int right){
    double temp,sum=0;
    for(int r=0;r<Rows;r++){      
        for(int c=0;c<=0;c++){
           //cout<<"["<<r<<","<<c<<"]="<<Data[r][c]<<" ";
           
            temp=Data[r][left]*Data[r][right];
            //cout<<Data[r][left]<<" * "<<Data[r][right]<<" = "<<temp;
            sum+=temp;
            //cout<<sum<<endl;
            temp=0;           
            
        }//cout<<endl;
    }
    return sum;
}



double square(double **Data,int Rows, int stop){
    double temp,sum=0;
    //sumx*sumx
    for(int r=0;r<Rows;r++){
        //cout<<r<<" ";        
        for(int c=0;c<=stop;c++){
           //cout<<"["<<r<<","<<c<<"]="<<Data[r][c]<<" ";
           // cout<<Data[r][0]<<"^2 = ";
            temp=Data[r][c]*Data[r][c];
            sum+=temp;
            //cout<<sum<<endl;
            temp=0;           
            
        }//cout<<endl;
    }
    //cout<<"\n\nsx*sx: "<<sum<<endl;
    return sum;
}