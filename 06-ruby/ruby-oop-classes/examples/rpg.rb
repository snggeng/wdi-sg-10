class Human
  attr_writer :weapon
  def initialize hp, mp
    @hp = hp
    @mp = mp
  end

  def attack
    if @weapon.nil?
      "I punch enemy with my fists."
    else 
      "I attack with my #{@weapon}."
    end
  end

  def defend
    "I block attacks with my bare arms."
  end
end

class Knight < Human
  attr_writer :shield
  def initialize hp, mp, shield=nil
    super hp, mp
    @shield = shield
  end

  def defend
    if @shield.nil?
      super
    else
      "I defend with my #{@shield}"
    end
  end
end

class Mage < Human
  def initialize hp, mp
    super
    @magic = nil
  end

  def learn magic
    @magic = magic
  end

  def cast
    if @magic.nil? || @mp.zero?
      "Nothing happen."
    else
      @mp -= 10
      "I cast #{@magic} to my enemy."
    end
  end

  def attack
    cast
  end

  def defend
    if @mp.zero?
      super
    else
      @mp -= 10
      "I cast a protective spell."
    end
  end
end

puts "Peasant's moves"
peasant = Human.new 50, 10
p peasant.attack
peasant.weapon = :stick
p peasant.attack
p peasant.defend
puts

puts "Knight 1's moves"
knight1 = Knight.new 100, 10, :big_shield
p knight1.attack
p knight1.defend
knight1.weapon = :big_sword
p knight1.attack
puts

puts "Knight 2's moves"
knight2 = Knight.new 100, 10
knight2.weapon = :long_sword
p knight2.attack
p knight2.defend
knight2.shield = :round_shield
p knight2.defend
puts

puts "Mage's moves"
mage = Mage.new 70, 50
p mage.cast
mage.learn :fire
p mage.cast
p mage.defend
5.times { p mage.attack }
p mage.defend
puts
