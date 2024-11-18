<template>
  <div>
    <h1>Available Packages</h1>
    <PricingModalButton
        :package="PACKAGES[0]"
        @click="logButtonClick"
        @select="handlePackageSelection"
    >
      Show Package 1
    </PricingModalButton>

    <PricingModalButton
        :package="PACKAGES[1]"
        @click="logButtonClick"
        @select="handlePackageSelection"
    >
      Show Package 2
    </PricingModalButton>

    <PricingModalButton
        :package="PACKAGES[2]"
        @click="logButtonClick"
        @select="handlePackageSelection"
    >
      Show Package 3
    </PricingModalButton>
  </div>
</template>

<script setup lang="ts">

const PACKAGES = [
  {
    name: "Starter",
    price: "$9.99",
    description: "Perfect for getting started.",
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "For professionals who need more features.",
  },
  {
    name: "Enterprise",
    price: "$49.99",
    description: "For large-scale businesses.",
  },
];

// Handlers
const logButtonClick = () => {
  console.log("PricingModalButton clicked!");
};

const handlePackageSelection = (selectedPackage:any) => {
  console.log("Package selected:", selectedPackage);
};
</script>
