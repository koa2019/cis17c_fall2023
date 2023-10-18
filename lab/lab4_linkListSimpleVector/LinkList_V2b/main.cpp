/*
    Author: Danielle 
    Date:   10-17-23 @8PM
    Purpose: Linked from first principles v2b
 * 
 *  STOPPED WORKING ON IT AND STARTED ON V3b
 */

//System Libraries
#include <iostream>    //Input/Output Library
#include <cstdlib>     //NULL pointer
using namespace std;   //Library Name-space

//User Libraries
struct Link{
    int data;     //Some type of data
    Link *lnkNext; //Next Link in the chain
};

//Global/Universal Constants -- No Global Variables
//Science, Math, Conversions, Higher Dimensioned constants only

//Prototype function you are to consider for Wednesday
Link *create(int);    //Create a Link with Data
void pshFrnt(Link *,Link *); //Push a link to the front
void pshBack(Link *,Link *); //Push a link to the end
Link *popFrnt(Link *);      //Pull/pop a link from the front
Link *popBack(Link *);      //Pull/pop a link from the back


//Execution Begins Here
int main(int argc, char** argv) {
    //Set the Random number seed
    
    //Declare variables
    Link *lnk1=new Link;
    Link *lnk2=new Link;
    Link *lnk3=new Link;
    Link *lnk4=new Link;
    Link *lnk5=new Link;
    
    //Fill the structures with data
    lnk1->data=1;
    lnk2->data=2;
    lnk3->data=3;
    lnk4->data=4;
    lnk5->data=5;
    
    //Point the individual pointers to the next link
    lnk1->lnkNext=lnk2;
    lnk2->lnkNext=lnk3;
    lnk3->lnkNext=lnk4;
    lnk4->lnkNext=lnk5;
    lnk5->lnkNext=NULL;
    
    //Printing all the data elements in the linked list
    Link *next=lnk1;
    while(next!=NULL){
        cout<<next->data<<endl;
        next=next->lnkNext;
    }
    
    //(lnk1, link4)
    pshBack(lnk1,lnk4);
    
    
    //Delete all the allocated memory
    Link *front=lnk1;
    while(front!=NULL){
        Link *temp=front;
        front=front->lnkNext;
        delete temp;
    }
    
    //Exit stage right
    return 0;
}

void pshBack(Link *aLink,Link *bLink){ //Push a link to the end

    cout<<"\naLink: "<<aLink->data<<"\nbLink: "<<bLink->data<<endl;
    Link *temp=aLink;
    
    
}