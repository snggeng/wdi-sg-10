class Cat
  attr_reader :whisker
  attr_accessor :size

  def initialize size
    @whisker = true
    @size = size
  end
end

class Tiger < Cat
  @@population = 0

  def initialize size
    super
    @fur_pattern = :stripes
    @@population += 1
  end

  def population
    @@population
  end
end

class WhiteTiger < Tiger
  def initialize size
    super
    @color = :white
  end
end

#Tiger.initPopulation 0
tiger1 = Tiger.new :xs
tiger2 = Tiger.new :xxl

#whitetiger1 = WhiteTiger.new :m

p tiger1
p tiger1.size
p tiger1.whisker
tiger1.size = :xxl
p tiger1.size
#p whitetiger1.size

p tiger1.population
p tiger2.population





