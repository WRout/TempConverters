import java.util.*;

public class Main {
    
    int celsius;
    int kelvin;
    int fahrenheit;
    
    static int _celsius;
    static int _kelvin;
    static int _fahrenheit;
    
    static Main obj;
    static Scanner input;
    static Scanner typeInput;
    
    Main (int celsius, int kelvin, int fahrenheit){
        this.celsius = celsius;
        this.kelvin = kelvin;
        this.fahrenheit = fahrenheit;
    }
    
	  static public void main (String[] args) {
        ClearConsole();
        runProgram();
	  }
    
    public static void runProgram() {
        typeInput = new Scanner(System.in);
        System.out.println("Please input the type of temperature you would like to be converted by entering the corresponding number:\nKelvin : 1\nCelsius : 2\nFahrenheit : 3");
        int type = typeInput.nextInt();
        switch (type){
            case 1:
                obj = isKelvin();
                messages(obj.kelvin, obj.celsius,  obj.fahrenheit);
                break;

            case 2:
                obj = isCelsius();
                messages(obj.kelvin, obj.celsius,  obj.fahrenheit);
                break;

            case 3:
                obj = isFahrenheit();
                messages(obj.kelvin, obj.celsius,  obj.fahrenheit);
                break;

            default:
                ClearConsole();
                System.out.println("Invalid Type; Please try again!\n");
                runProgram();
        }
    }
    
    public static void messages(int kelvin, int celsius, int fahrenheit) {
        System.out.println("The temperature in kelvin is " + kelvin);
        System.out.println("The temperature in celsius is " + celsius);
        System.out.println("The temperature in fahrenheit is " + fahrenheit);
    }
    
    public static Main isKelvin() {
        input = new Scanner(System.in);
        System.out.println("Please choose the temperature in kelvin");
        _kelvin = input.nextInt();
        _celsius = _kelvin - 273;
        _fahrenheit = (_celsius * 9/5) + 32;
        Main kelvin = new Main(_celsius, _kelvin, _fahrenheit);
        return kelvin;
        
    }
    
    public static Main isCelsius() {
        input = new Scanner(System.in);
        System.out.println("Please choose the temperature in celsius");
        _celsius = input.nextInt();
        _kelvin = _celsius + 273;
        _fahrenheit = (_celsius * 9/5) + 32;
        Main celsius = new Main(_celsius, _kelvin, _fahrenheit);
        return celsius;
        
    }
    
    public static Main isFahrenheit() {
        input = new Scanner(System.in);
        System.out.println("Please choose the temperature in fahrenheit");
        _fahrenheit = input.nextInt();
        _celsius = (_fahrenheit - 32) * 5/9;
        _kelvin = _celsius + 273;
        Main fahrenheit = new Main(_celsius, _kelvin, _fahrenheit);
        return fahrenheit;
        
    }

    public static void ClearConsole(){
      System.out.print("\033[H\033[2J");
    }

}