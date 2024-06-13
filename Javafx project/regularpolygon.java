
// student number 22203536

package assignment_2;

public class regularpolygon {
	
public int n ;
public double length ;


public regularpolygon()  {
	this.length = 1 ;
	this.n = 3 ;}
	
	
	public regularpolygon(double length, int n) {
		
		this.length = length;
		    this.n = n ;
		    
	
}
	
public int getnumberofsides() {
	return n;
}
	
public void setnumberofsides(int n) {
	this.n = n ;
	
	
}


public double getperimeter() {
	return length*n;
}

public void lengthsetter(double length) {
	this.length = length;
}

public double getarea() {
	return (Math.pow(length, 2)*(n))/
			(4*Math.tan(Math.PI/n));
}


public String tostring() 
{ return " n is " + n + "length is " + length;

}}


//end
